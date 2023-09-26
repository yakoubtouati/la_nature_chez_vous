
const reponse = await fetch("data.json")
const nature  = await reponse.json()


function afficher(nature){
for (let i=0;i<nature.length;i++){
    const fiches=document.querySelector(".fiches")
    const article=document.createElement("article")

    const imageElement=document.createElement("img")
    imageElement.src=nature[i].image  
    const nomElement=document.createElement("h2")
     nomElement.innerText=nature[i].nom
     const prixElement=document.createElement("p")
     prixElement.innerText=` prix : ${nature[i].prix} €`
     const categoryElement=document.createElement("p")
     categoryElement.innerText=`categorie : ${nature[i].category}`
     const descriptionElement= document.createElement("p")
     descriptionElement.innerText=`Description : ${nature[i].description}`
     const disponibiliteElement = document.createElement("div")
     disponibiliteElement.innerHTML= nature[i].disponibilite ? '<p style="color: green">En Stock</p>' : '<p style="color:red">En repture de stock</p>'

     article.appendChild(imageElement)
     article.appendChild(nomElement)
     article.appendChild(prixElement)
     article.appendChild(categoryElement)
     article.appendChild(descriptionElement)
     article.appendChild(disponibiliteElement)

     fiches.appendChild(article)

    //  for(let )
    //  article.addEventListener("click",(e)=>{
    
    //         e.target.parentElement.style.backgroundColor="red"

    //  })

}
}
afficher(nature)

// =--------------------------- tous les produits --------------------------------=

    const all=document.querySelector(".all")
    const trierAll=document.querySelector(".trierAll")
    all.addEventListener("click",()=>{
        document.querySelector(".fiches").innerHTML=""
        afficher(nature)

        trierAll.style.display="block"
        trierPlantes.style.display="none"
        trierFleurs.style.display="none"

        const allDisponible=document.querySelector(".trierAll .dispo")
        allDisponible.addEventListener("click",()=>{
            const allElement=nature.filter(element=>element.disponibilite)
            document.querySelector(".fiches").innerHTML=""
            afficher(allElement)
        })

        const trierPrixAll=document.querySelector(".trierAll input")
        trierPrixAll.addEventListener("input",()=>{
            const prixAll=nature.filter((element)=>element.prix<=trierPrixAll.value)

            document.querySelector(".fiches").innerHTML=""
            afficher(prixAll)
        })

        const ordreCroissantAll=document.querySelector(".trierAll .ordre")
        ordreCroissantAll.addEventListener("click",()=>{
            const listeOrdonnesAll=[...nature].sort((a,b)=>a.prix-b.prix)

            document.querySelector(".fiches").innerHTML=""
            afficher(listeOrdonnesAll)
        })





    })






// ----------------------- plantes --------------------------------------

const plantes=document.querySelector(".plantes")
const trierPlantes=document.querySelector(".filtrer .trierPlantes")

plantes.addEventListener("click",()=>{
    
    trierPlantes.style.display="block"
    trierFleurs.style.display="none"
    trierAll.style.display="none"
    
    const planteElement=nature.filter((element)=>element.category=="Plantes")
    
    document.querySelector(".fiches").innerHTML=""
    afficher(planteElement)

    const plantesDisponible=document.querySelector(".trierPlantes .dispo")
    plantesDisponible.addEventListener("click",()=>{
        const disponibilite=planteElement.filter((element)=>element.disponibilite)
        document.querySelector(".fiches").innerHTML=""
        afficher(disponibilite)
    })

    const trierPrix=document.querySelector(".trierPlantes input")
    trierPrix.addEventListener("input",()=>{
        const prixPlantes= planteElement.filter((element)=>element.prix<=trierPrix.value)
        document.querySelector(".fiches").innerHTML=""
        afficher(prixPlantes)
    })

    const ordreCroissant=document.querySelector(".trierPlantes .ordre")
    ordreCroissant.addEventListener("click",()=>{

        const listeOrdonnes=[...planteElement].sort((a,b)=>a.prix-b.prix)
        document.querySelector(".fiches").innerHTML=""
        afficher(listeOrdonnes)
    })


})

//----------------------- Fleurs ----------------------------------------

const fleurs= document.querySelector(".fleurs")
const trierFleurs=document.querySelector(".filtrer .trierFleurs")

fleurs.addEventListener("click",()=>{

    
    trierFleurs.style.display="block"
    trierPlantes.style.display="none"
    trierAll.style.display="none"


    const fleurElement=nature.filter((element)=>element.category==="Fleurs")
    document.querySelector(".fiches").innerHTML=""
    afficher(fleurElement)

    const fleursDisponible=document.querySelector(".trierFleurs .dispo")
    fleursDisponible.addEventListener("click",()=>{
        const disponibilite=fleurElement.filter((element)=>element.disponibilite)
        document.querySelector(".fiches").innerHTML=""
        afficher(disponibilite)

    })

    const trierPrixFleurs=document.querySelector(".trierFleurs input")
    trierPrixFleurs.addEventListener("input",()=>{
        const prixFleurs=fleurElement.filter(element=>element.prix<=trierPrixFleurs.value)
        document.querySelector(".fiches").innerHTML=""
        afficher(prixFleurs)
    })

    const ordreCroissantFleur=document.querySelector(".trierFleurs .ordre")
    ordreCroissantFleur.addEventListener("click",()=>{
        const listeOrdonnesFleurs=[...fleurElement].sort((a,b)=>a.prix-b.prix)
        document.querySelector(".fiches").innerHTML=""
        afficher(listeOrdonnesFleurs)
    })


})

//-------------------- heure et date --------------------

const divDate=document.querySelector(".date")
const temps=document.createElement("h2")
const date=document.createElement("h2")

window.setInterval(()=>{
    divDate.style.display="block"
    let time=new Date().toLocaleTimeString()
    let days=new Date().toLocaleDateString()
    temps.innerText=time
    date.innerText=days
    divDate.appendChild(date)
    divDate.appendChild(temps)

},1000)