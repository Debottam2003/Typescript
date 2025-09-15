// For ESM (if package.json has `"type": "module"`)
import { setWallpaper, getWallpaper } from 'wallpaper';

async function changeWallpaper(pathToImage) {
  try {
    await setWallpaper(pathToImage);
    console.log('Wallpaper changed!');
    const current = await getWallpaper();
    console.log('Current wallpaper is:', current);
  } catch (err) {
    console.error('Error changing wallpaper:', err);
  }
}

changeWallpaper("C:/Users/DEBOTTAM/Music/Pictures/wallpaper/japan1.png");

// setWallpaper(path, options?)
// On Windows: it calls a small compiled helper (windows-wallpaper-x86-64.exe)
// that talks to the Windows API.

// On macOS: it uses AppleScript to tell Finder/System Preferences to update wallpaper.

// On Linux: it supports several common desktop environments (GNOME, KDE, etc).

// getWallpaper(options?)
// Returns the path of the current desktop wallpaper.

