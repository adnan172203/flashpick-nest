import axios from 'axios';

export const handleImageUpload = async (images: string[]) => {
  try {
    if (!images || images.length === 0) {
      throw new Error('No images to upload');
    }

    // Create upload promises for each image
    const uploadPromises = images.map(async (imageUrl) => {
      // Check if the URL is a valid blob URL
      if (!imageUrl.startsWith('blob:')) {
        console.error('Invalid blob URL:', imageUrl);
        throw new Error('Unsupported image type');
      }

      // Fetch the blob data from the URL
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      // Create FormData for each image
      const formData = new FormData();
      formData.append('file', blob);

      if (process.env.UPLOAD_PRESET) {
        formData.append('upload_preset', process.env.UPLOAD_PRESET);
      }
      if (process.env.CLOUD_NAME) {
        formData.append('cloud_name', process.env.CLOUD_NAME);
      }

      // Send request to Cloudinary
      const cloudinaryResponse = await axios.post(
        process.env.CLOUDINARY_URL || '',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      return cloudinaryResponse.data.url;
    });

    // Wait for all uploads to complete
    const uploadedUrls = await Promise.all(uploadPromises);
    console.log('uploadurl', uploadedUrls);

    return uploadedUrls;
  } catch (error) {
    console.error('Error uploading images:', (error as any).message);
    throw error;
  }
};
