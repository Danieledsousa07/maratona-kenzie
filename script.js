function positions (fistPlace,secondPlace,lastPlace){

    let posicaoDosCompetidores = [fistPlace,secondPlace,lastPlace]
    console.log(posicaoDosCompetidores)
    if (fistPlace == "Daniel"){
        return console.log ("Primeiro - colocado: " + fistPlace + " ,Segundo - colocado: " + secondPlace + " ,Terceiro - colocado: " + lastPlace)

    }else if (secondPlace == "Daniel"){
        return console.log ("Primeiro - colocado: " + secondPlace + " ,Segundo - colocado: " + fistPlace + " ,Terceiro - colocado: " + lastPlace)




    }else if (lastPlace == "Daniel"){

        return console.log ("Primeiro - colocado: " + fistPlace + " ,Segundo - colocado: " + lastPlace + " ,Terceiro - colocado: " + secondPlace ) 

    }
   

}
positions("Daniel","Rafael","Manoel")

positions ("Daniel","Rafael","Manoel")

positions ("Rafael","Manoel","Daniel")



