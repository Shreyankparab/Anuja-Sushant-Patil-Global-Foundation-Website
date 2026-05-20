export const submitToGoogleSheets = async (data: any) => {
    // This is a placeholder URL. User will provide the actual Google Apps Script Web App URL later.
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwKlMVJOBqVcLE7vuGEV1SNLNXn_Ayjd3DkGC5oCCSAasSE9ycusIGA-TRPzl64VsP5/exec";

    if (!GOOGLE_SCRIPT_URL) {
        console.warn("Google Script URL is not provided. Skipping submission.");
        return { success: true, message: "URL not set, simulating success" };
    }

    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "text/plain",
            },
            body: JSON.stringify({
                ...data,
                timestamp: (() => {
                    const now = new Date();
                    const d = String(now.getDate()).padStart(2, '0');
                    const m = String(now.getMonth() + 1).padStart(2, '0');
                    const y = now.getFullYear();
                    const hh = String(now.getHours()).padStart(2, '0');
                    const mm = String(now.getMinutes()).padStart(2, '0');
                    const ss = String(now.getSeconds()).padStart(2, '0');
                    return `${d}/${m}/${y}, ${hh}:${mm}:${ss}`;
                })(),
            }),
        });
        return { success: true };
    } catch (error) {
        console.error("Error submitting to Google Sheets:", error);
        return { success: false, error };
    }
};
