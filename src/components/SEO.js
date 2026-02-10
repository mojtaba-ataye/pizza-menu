import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, url, image }) {
  return (
    <Helmet>
      <title>{title || "FAST REACT PIZZA CO."}</title>
      {description && <meta name="description" content={description} />}
      {url && <link rel="canonical" href={url} />}

      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
