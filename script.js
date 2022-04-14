function positions (fistPlace,secondPlace,lastPlace){

    let posicaoDosCompetidores = [fistPlace,secondPlace,lastPlace]
    
    if (fistPlace == "Daniel"){
        return ("Primeiro - colocado: " + fistPlace + " ,Segundo - colocado: " + secondPlace + " ,Terceiro - colocado: " + lastPlace)

    }else if (secondPlace == "Daniel"){
        return ("Primeiro - colocado: " + secondPlace + " ,Segundo - colocado: " + fistPlace + " ,Terceiro - colocado: " + lastPlace)

    }else if (lastPlace == "Daniel"){

        return ("Primeiro - colocado: " + fistPlace + " ,Segundo - colocado: " + lastPlace + " ,Terceiro - colocado: " + secondPlace ) 

    }
   
}
positions("Daniel","Rafael","Manoel")

positions ("Daniel","Rafael","Manoel")

positions ("Rafael","Manoel","Daniel")



