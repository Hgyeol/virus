setInterval(() => {
    let textElements = document.querySelectorAll('a, span, div.toI8Rb.OSrXXb, span.owe5Ae, div.YmvwI, span.FMKtTb.DNJVhe.bSsRe, div.VwiC3b.yXK7lf.p4wth.r025kc.hJNv6b.Hdw6tb, a#fprsl.gL9Hy, a.spell_orig, div.zz3gNc, div#logo'); 
    textElements.forEach((el) => {
        el.innerText = "덕현덕현육덕현 덕현덕현공덕현 덕현덕현육덕현 덕현덕현공덕현 덕현덕현육덕현 덕현덕현공덕현 덕현덕현육덕현 덕현덕현공덕현 "; 
    });
    
    

    document.querySelectorAll('*').forEach(el => el.classList.add('duck'));

    document.querySelectorAll('.duck').forEach(el => {
        el.href = "https://holy-chili-54e.notion.site/1331e12dbb9b8037aa68c528e468f603";
    });
    let imgs = document.querySelectorAll('img');
    imgs.forEach((a, i) => {
        //a.src = "https://img.notionusercontent.com/s3/prod-files-secure%2F20d51118-9446-45f7-988b-31afd0991192%2Fceaa1943-03e1-4669-95c2-bfe72dbb3302%2FKakaoTalk_Photo_2024-09-23-15-56-34.png/size/w=1070?exp=1730878787&sig=JohWI8q2NCyCnRR5G1GIrt7nrHZ86O6Tc1Kg1GWgCBs";
        a.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDnfTYDBacmaozEbFD4yynTJHvsmZNyzDOPg&s";
    });
    // chrome://extensions 페이지로 이동 시 google.com으로 리다이렉트
    // if (window.location.href === "https://www.youtube.com/") {
    //     window.location.href = "https://google.com";
    // }

    // chrome.webRequest.onBeforeRequest.addListener(
    //     function(details) {
    //       return { redirectUrl: "https://www.google.com" };  // 차단 후 리디렉션할 URL
    //     },
    //     { urls: ["chrome://extensions/"] },
    //     ["blocking"]
    //   );

}, 100);
