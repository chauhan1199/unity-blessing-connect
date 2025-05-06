
import React, { useState } from 'react';

const ContactMap = () => {
  // In a production app, you would store this in environment variables
  const [mapboxToken, setMapboxToken] = useState('');
  
  if (!mapboxToken) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center bg-muted/30 p-4">
        <div className="max-w-md w-full space-y-4 text-center">
          <h3 className="text-xl font-semibold">Map Preview</h3>
          <p className="text-muted-foreground">
            To display an interactive map, please enter your Mapbox public token below.
          </p>
          <input
            type="text"
            placeholder="Enter your Mapbox public token"
            className="w-full p-2 border rounded-md"
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <div className="text-xs text-muted-foreground">
            <p>Get your Mapbox token at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">mapbox.com</a></p>
          </div>
        </div>
      </div>
    );
  }

  // For this demo, we'll use an iframe with OpenStreetMap
  // In a real app, you would use the Mapbox GL JS library with your token
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117423.50568222721!2d72.39378936545!3d23.019997472740993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1715117241266!5m2!1sen!2sus`;

  return (
    <iframe
      src={mapSrc}
      className="h-full w-full border-0"
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Unity Connect Location Map"
    />
  );
};

export default ContactMap;
