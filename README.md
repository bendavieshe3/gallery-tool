# Gallery Tool

## Overview

The Gallery Tool is a local web application designed to display and manage image galleries. Each gallery corresponds to a pre-configured file folder and displays a set of thumbnails for the images in that folder. Users can click on an image to view it in full screen. The application supports navigation between different galleries and offers various image management features.

## Features

- Display images from multiple directories as galleries
- Thumbnail generation for faster browsing
- Full-screen image viewing
- Dynamic gallery listing
- Easy navigation between galleries

## Future Features

- Dynamic grouping of images
- Batch operations (deletion, downloading, renaming)
- Quality assessment and ordering
- Tagging and favoriting images
- Search functionality (filename, tags, EXIF data)
- EXIF data inspection and updates
- Reorganization of files into new galleries
- Background tasks (thumbnail generation, API interactions, uploading)

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ai-art-review-gallery
   ```
2. Install dependencies:
   ```
   npm install
   ```   
   3. Run the application:
   ```
   npm start
   ```

### Configuration

The directories for galleries are specified in the config/directories.json file. Update this file to add or modify galleries.

## Directory Structure
project-root/
│
├── config/
│   └── directories.json
│
├── public/
│   ├── images/            # Store images here
│   └── thumbnails/        # Store thumbnails here
│
├── src/
│   ├── routes/
│   │   └── gallery.js     # Routes for gallery management
│   │   └── image.js       # Routes for image display and manipulation
│   ├── views/
│   │   └── index.html     # Main HTML file
│   └── app.js             # Main Express application
│
├── .gitignore
├── package.json
└── README.md

## Contributing

   1. Fork the repository
   2. Create a new branch (git checkout -b feature-branch)
   3. Make your changes
   4. Commit your changes (git commit -m 'Add some feature')
   5. Push to the branch (git push origin feature-branch)
   6. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
