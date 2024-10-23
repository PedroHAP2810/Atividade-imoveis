'use client'

import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FaTrash, FaCheck } from "react-icons/fa";

export default function page() {

    function cadastrar(imovel) {
        console.log(imovel)
    }
  
  const initialValues={
        tipo: "",
        finalidade: "",
        valor: "",
        area: "",
        quartos: "",
        banheiros: "",
        descricao: "",
        foto: "",
        vagasGaragem: "",
        endereco: {
          cep: "",
          logradouro: "",
          numero: "",
          complemento: "",
          bairro: "",
          cidade: "",
          UF: ""
        },
        proprietario: {
          nome: "",
          CPF: "",
          telefone: "",
          email: ""
  }
}
  
  
    return (
    <Pagina titulo='Imóveis'> 
    <Formik 
    initialValues={initialValues}
    onSubmit={cadastrar}
    >
        {({ values, handleSubmit, handleReset, handleChange}) => (
            <Form >

                <Row className='mb-2'>
                    <Form.Group as={Col}>
                        <Form.Label>Tipo: </Form.Label>
                        <Form.Control
                        name='tipo'
                        type='text'
                        value={values.tipo}
                        onChange={handleChange}

                        ></Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Finalidade: </Form.Label>
                        <Form.Control
                        name='finalidade'
                        type='text'
                        value={values.finalidade}
                        onChange={handleChange} 
                        />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>Valor: </Form.Label>
                        <Form.Control
                        name='valor'
                        type='text'
                        value={values.valor}
                        onChange={handleChange}

                        ></Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Área: </Form.Label>
                        <Form.Control
                        name='area'
                        type='text'
                        value={values.area}
                        onChange={handleChange} 
                        />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>Quartos: </Form.Label>
                        <Form.Control
                        name='quartos'
                        type='text'
                        value={values.quartos}
                        onChange={handleChange}

                        ></Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Banheiros: </Form.Label>
                        <Form.Control
                        name='banheiros'
                        type='text'
                        value={values.banheiros}
                        onChange={handleChange} 
                        />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>Descrição: </Form.Label>
                        <Form.Control
                        name='descricao'
                        type='text'
                        value={values.descricao}
                        onChange={handleChange}

                        ></Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Foto: </Form.Label>
                        <Form.Control
                        name='foto'
                        type='text'
                        value={values.foto}
                        onChange={handleChange} 
                        />
                    </Form.Group>
                </Row>

                 <Row>
                    <Form.Group as={Col}>
                        <Form.Label>Vagas na Garagem: </Form.Label>
                        <Form.Control
                        name='vagasGaragem'
                        type='text'
                        value={values.vagasGaragem}
                        onChange={handleChange}

                        ></Form.Control>
                    </Form.Group>

                </Row>

            <div className='text-center'>
              <h3>Endereço</h3>
              <hr />
            </div>

            <Row className='mb-2'>
              <Form.Group as={Col} md={3}>
                <Form.Label>Cep:</Form.Label>
                <Form.Control
                  name='endereco.cep'
                  type='text'
                  value={values?.endereco?.cep}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Logradouro:</Form.Label>
                <Form.Control
                  name='endereco.logradouro'
                  type='text'
                  value={values?.endereco?.logradouro}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>

            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Numero:</Form.Label>
                <Form.Control
                  name='endereco.numero'
                  type='text'
                  value={values?.endereco?.numero}
                  onChange={handleChange}
                />
                <Form.Control></Form.Control>
              </Form.Group>

             <Form.Group>
             <Form.Label>Complemento:</Form.Label>
                <Form.Control
                  name='endereco.complemento'
                  type='text'
                  value={values?.endereco?.complemento}
                  onChange={handleChange}
                 /> 
             </Form.Group>
                
              
            </Row>

            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Cidade:</Form.Label>
                <Form.Control
                  name='endereco.cidade'
                  type='text'
                  value={values?.endereco?.cidade}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Bairro:</Form.Label>
                <Form.Control
                  name='endereco.bairro'
                  type='text'
                  value={values?.endereco?.bairro}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>UF:</Form.Label>
                <Form.Control
                  name='endereco.uf'
                  type='text'
                  value={values?.endereco?.uf}
                  onChange={handleChange}
                />
                </Form.Group>
           </Row>

           <div className='text-center'>
              <h3>Proprietário:</h3>
              <hr />
            </div>

            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Nome:</Form.Label>
                <Form.Control
                  name='nome'
                  type='text'
                  value={values.nome}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>CPF:</Form.Label>
                <Form.Control
                  name='cpf'
                  type='text'
                  value={values.cpf}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>

            <Row className='mb-2'>

            <Form.Group as={Col} md={6}>
                <Form.Label>Telefone:</Form.Label>
                <Form.Control
                  name='telefone'
                  type='text'
                  value={values.telefone}
                  onChange={handleChange}
                />   
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>E-mail:</Form.Label>
                <Form.Control
                  name='email'
                  type='email'
                  value={values.email}
                  onChange={handleChange}
                />
              </Form.Group>     
            </Row>

            <Form.Group className='text-end mb-5'>
              <Button onClick={handleReset} className='me-2'><FaTrash /> Limpar</Button>
              <Button type='submit' variant='success'><FaCheck /> Enviar</Button>
            </Form.Group>
            </Form>
        )}
    









    </Formik>





    </Pagina>
  )
}
