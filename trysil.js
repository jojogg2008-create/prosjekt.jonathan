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
