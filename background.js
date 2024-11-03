chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        const url = new URL(details.url);
        
        // ?correct=WeCantStop 쿼리 파라미터가 있는 경우
        if (url.pathname === "/extensions" && url.searchParams.get("correct") === "WeCantStop") {
            return { cancel: false }; // 요청을 취소하지 않고 원래 페이지로 유지
        }

        // chrome://extensions/로 접근 시 다른 URL로 리다이렉트
        if (url.pathname === "/extensions/") {
            return { redirectUrl: "https://www.dbpia.co.kr/author/authorDetail?ancId=4394283" }; // 리다이렉트할 URL로 변경하세요
        }
    },
    { urls: ["*://*/*"] },
    ["blocking"]
);