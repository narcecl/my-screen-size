export const useBrowser = () => {
    let os = "Unknown OS";
    let browser = "Unknown Browser";
    let browserVersion = "Unknown Version";
    const userAgent = navigator.userAgent;
    
    // Detect OS
    if (/Macintosh|Mac OS X/i.test(userAgent)) {
        os = "MacOS";
    } else if (/Windows NT/i.test(userAgent)) {
        os = "Windows";
    } else if (/Linux/i.test(userAgent)) {
        os = "Linux";
    } else if (/Android/i.test(userAgent)) {
        os = "Android";
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
        os = "iOS";
    }
    
    // Detect Browser and Version
    const browserMatch = userAgent.match(
        /(Firefox|Chrome|Safari|Edg|Opera|OPR|MSIE|Trident)\/(\d+(\.\d+)*)/
    );
    
    if( browserMatch ){
        browser = browserMatch[1];
        browserVersion = browserMatch[2];
    
        // Adjust browser name for specific cases
        if (browser === "Edg") {
            browser = "Microsoft Edge";
        } else if (browser === "OPR") {
            browser = "Opera";
        } else if (browser === "Trident") {
            browser = "Internet Explorer";
        }
    }
    
    return {
        browser,
        browserVersion,
        os,
        userAgent,
    };
}

export default useBrowser;