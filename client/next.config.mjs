/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CLOUDINARY_URL: 'https://api.cloudinary.com/v1_1/dfmn9nhqt/image/upload',
    CLOUD_NAME: 'dfmn9nhqt',
    UPLOAD_PRESET: 'wolverine',
  },
};

export default nextConfig;
