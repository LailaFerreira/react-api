import React from 'react'


const COLABORADORES = '_COLABORADORES'

export function ErroValidacao(erros){
    this.erros = erros;
}

export default class ColaboradorService{

    salvar = (colaborador) => {
        if(this.validar(colaborador)){

            let colaboradores = localStorage.getItem(COLABORADORES);
            if(!colaboradores) {
                colaboradores = [];
            }else{
                colaboradores = JSON.parse(colaboradores);
            }

            colaboradores.push(colaborador);
            localStorage.setItem(COLABORADORES, JSON.stringify(colaboradores));
        }else{
            console.log('vish deu merda')
        }
    }

    validar = (colaborador) => {
        const erros = []
        
        if(!colaborador.nome){
            erros.push('O campo nome é obrigatório')
        }

        if(!colaborador.email){
            erros.push('O campo email é obrigatório')
        }

        if(!colaborador.codigo || colaborador.codigo <= 0){
            erros.push('Código inválido')
        }

        if(!colaborador.cargo){
            erros.push('O campo cargo é obrigatório')
        }


        if(erros.length > 0){
            throw new ErroValidacao(erros)
        }

    }
}