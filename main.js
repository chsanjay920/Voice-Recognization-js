const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result',(e)=>{
    const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    p.innerText = text;
    texts.appendChild(p);
    // console.log(text);

    if(e.results[0].isFinal){
        if(text.includes('Hello')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'hi';
            texts.appendChild(p);
        }
        p = document.createElement('p')
    }

})

recognition.addEventListener('end',()=>{
    recognition.start();
})
recognition.start();