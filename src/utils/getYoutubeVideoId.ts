export function getYouTubeVideoId(url: string): string | null {
  try {
    const parsedUrl = new URL(url);

    // youtu.be/UJCzPoYMzuY
    if (parsedUrl.hostname.includes("youtu.be")) {
      return parsedUrl.pathname.slice(1);
    }

    // youtube.com/watch?v=UJCzPoYMzuY
    if (parsedUrl.searchParams.get("v")) {
      return parsedUrl.searchParams.get("v");
    }

    // youtube.com/embed/UJCzPoYMzuY
    if (parsedUrl.pathname.startsWith("/embed/")) {
      return parsedUrl.pathname.split("/embed/")[1];
    }

    // youtube.com/shorts/UJCzPoYMzuY
    if (parsedUrl.pathname.startsWith("/shorts/")) {
      return parsedUrl.pathname.split("/shorts/")[1];
    }


    //youtube.com/live/videoid
    if (parsedUrl.pathname.startsWith("/live/")) {
      return parsedUrl.pathname.split("/live/")[1];
    }

    return "Unsupportted youtube url";
  } catch {
    return "Invalid URL string";
  }
}