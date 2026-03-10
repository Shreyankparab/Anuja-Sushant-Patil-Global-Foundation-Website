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
                timestamp: new Date().toLocaleString(),
            }),
        });
        return { success: true };
    } catch (error) {
        console.error("Error submitting to Google Sheets:", error);
        return { success: false, error };
    }
};
