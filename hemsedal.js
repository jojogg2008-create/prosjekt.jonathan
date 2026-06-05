const btn = document.getElementById("lesMerBtn");
        const p = document.getElementById("p");

        p.style.display = "none";

        btn.addEventListener("click", function () {
            if (p.style.display == "none") {
                p.style.display = "block";
                btn.innerHTML = "Les mindre";
            } else {
                p.style.display = "none";
                btn.innerHTML = "Les mer";
            }
        });


        const allSpans = document.querySelectorAll(".rating span")
        console.log(allSpans)
        let ratingTall = 0
        let textTilbakemelding=0
        const inputfelt = document.querySelector("#inputfelt")

        allSpans.forEach(Element=>{
            Element.addEventListener("click", function(){
                fjernactive()
                Element.classList.add("active")
                ratingTall = Element.textContent
                textTilbakemelding = inputfelt.value
                
            })
        })

        function fjernactive(){
            allSpans.forEach(Element=>{
                Element.classList.remove("active")
            })

        }

        document.querySelector("#rating-btn").addEventListener("click", function(){
            document.querySelector(".vurdering").style.display="none";
            document.querySelector(".svar").style.display="flex"
            console.log("hei")
            document.getElementById("ratingTall").innerHTML = ratingTall
            document.getElementById("textspan").innerHTML= textTilbakemelding

        })
