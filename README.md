# Image Search App

A React-based image search application that allows users to explore high-quality images from the Unsplash API. The gallery provides zoom functionality, and a "Load more" button enables seamless pagination for an improved user experience.

## Live Demo
🔗 [Image Search App](https://goit-react-hw-04-chi-beige.vercel.app/)

## Features
- 🔍 **Search Images**: Retrieve images from Unsplash API based on user queries.
- 🖼 **Image Preview**: Zoom in on images for a closer look.
- 🔄 **Infinite Scrolling**: Load more images dynamically.
- 🎨 **Responsive Design**: Fully optimized for mobile and desktop devices.

## Tech Stack
- **React** (Vite-based setup)
- **React Router** for navigation
- **Unsplash API** for image retrieval
- **Axios** for API requests
- **CSS Modules & Flexbox** for styling
- **React Icons, React Modal** for UI enhancements
- **React Loader Spinner** for smooth loading indicators
- **Formik** for form handling
- **React Hot Toast** for notifications

## Installation & Setup
To run this project locally, follow these steps:

1. **Clone the repository**
   ```sh
   git clone https://github.com/Valentyn-M/Image-Search_goit-react-hw-04.git
   cd Image-Search_goit-react-hw-04
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Run the development server**
   ```sh
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173/` (or as indicated in the terminal output).

## Project Structure
```
Image-Search_goit-react-hw-04/
│── public/                # Static assets
│── src/                   # Source code
│   ├── components/        # Reusable components
│   ├── pages/             # Application pages
│   ├── services/          # API services
│   ├── styles/            # Global styles
│── .gitignore
│── package.json
│── vite.config.js
│── README.md
```

## Deployment
The app is deployed on **Vercel**:
🔗 [Live Demo](https://goit-react-hw-04-chi-beige.vercel.app/)

To deploy your own version:
```sh
npm run build
vercel deploy
```

## License
This project is licensed under the MIT License.
