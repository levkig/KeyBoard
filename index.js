<script>
    let caps = false
    function init() {
        arr = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
        for (i of arr) {
            const key = document.createElement('button');
            key.addEventListener("keyup", funcKey);
            key.addEventListener("click", funcType);
            key.addEventListener("click", Sound);
            key.innerHTML = i;
            key.classList.add("MEGAULTRABUTTTTON");
            const container = document.getElementById('main_button_container');
            container.appendChild(key);
        }
    }
    function funcType(event) {
        const area = document.getElementById('area');
        if (caps === true) {
            area.innerHTML = area.innerHTML + event.target.innerHTML.toUpperCase()
        }
        else {
            area.innerHTML = area.innerHTML + event.target.innerHTML
        }
    }
    function funcKey(event) {
        const area = document.getElementById('area');
        if (event.key.length === 1) {


            if (caps === true) {
                area.innerHTML = area.innerHTML + event.key.toUpperCase()
            }
            else {
                area.innerHTML = area.innerHTML + event.key
            }
        }
        else if (event.key === "Backspace") {
            const area = document.getElementById('area');
            const area1 = area.innerHTML.slice(0, area.innerHTML.length - 1);
            area.innerHTML = area1;
        }
    }
    function funcSpace(event) {
        const area = document.getElementById('area');
        area.innerHTML = area.innerHTML + event.target.innerHTML
    }
    function funcBack(event) {
        const area = document.getElementById('area');
        const area1 = area.innerHTML.slice(0, area.innerHTML.length - 1);
        area.innerHTML = area1;
    }
    function func3(event) {
        if (event.shiftKey) {
            const area = document.getElementById('area');
            area.innerHTML = event.target.innerHTML.toUpperCase();
        }
    }
    function func4(event) {
        area.innerHTML = ""
    }
    function funcCaps(event) {
        caps = !caps;
    }
    function Sound() {
        var audio = new Audio(); 
        audio.src = 'Keyboard.mp3'; 
        audio.autoplay = true; 
    }
    window.onload = () => init();
</script>
