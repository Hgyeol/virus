setInterval(()=> {
    let imgs = document.querySelectorAll('img');
    imgs.forEach((a,i)=>{
        a.src = "https://img.notionusercontent.com/s3/prod-files-secure%2F20d51118-9446-45f7-988b-31afd0991192%2Fceaa1943-03e1-4669-95c2-bfe72dbb3302%2FKakaoTalk_Photo_2024-09-23-15-56-34.png/size/w=1280?exp=1730632951&sig=8A5RoiiHTqRZxR5O8Nc0CTCRnehp-J08baAkNUNhKJc"
    })

    let textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div'); 
    textElements.forEach((el) => {
        el.innerText = "공덕공덕공덕현"; 
    })
}, 500);