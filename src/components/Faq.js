import React, { Component } from "react";
import Faq from "react-faq-component";
 
const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "CovidRun ?",
            content: `Voici une application faite pour les confinés ! `,
        },
        {
            title: "Est-ce que l'équipe s'est amusé durant le hackaton ?",
            content:
                "Pour être honnête, je pense que oui, nous nous sommes amusé ! Il y a eu des baisses de motivations, des probèmes de micros mais malgré tout, nous avons tenu le choc !",
        },
        {
            title: "Quels sont les membres de l'équipe ?",
            content: `Les membres de l'équipe sont Emily, Céline, Helder, Jean-Philipe, Auxence, Aurélien, Tada et Audrey `,
        },
        {
            title: "Vous avez galéré ?",
            content: `Franchement ? Ne codez jamais en React Native`,
        },
        {
            title: "What is the package version",
            content: "v1.0.0",
        },
    ],
};
 
const styles = {
    titleTextColor: "black",
    rowTitleColor: "grey",
};
 
export default class App extends Component {
    render() {
        return (
            <div>
                <Faq data={data} styles={styles} />
            </div>
        );
    }
}