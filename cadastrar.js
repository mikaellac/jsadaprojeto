const cadastrar=()=>{
  const codigo=document.getElementById("codigo")
  const produto=document.getElementById("produto")
  const quantidade=document.getElementById("quantidade")
  const preco=document.getElementById("preco")

  const codigovalue=codigo.value
  const produtovalue=produto.value
  const quantidadevalue=quantidade.value
  const precovalue=preco.value

  if(codigovalue==="" || produtovalue==="" || quantidadevalue==="" || precovalue==="")
  return

  const total=quantidadevalue * precovalue

  const body=document.getElementById("body-cadastro-table")
  const newRow=body.insertRow()

  createCell(newRow,codigovalue)
  createCell(newRow,produtovalue)
  createCell(newRow,quantidadevalue)
  createCell(newRow,precovalue)
  createCell(newRow,total)
  
  /*const newCell=newRow.insertCell()
  const node=document.createTextNode(codigovalue)
  newCell.appendChild(node)

  const newCell2=newRow.insertCell()
  const node2=document.createTextNode(produtovalue)
  newCell2.appendChild(node2)

  const newCell3=newRow.insertCell()
  const node3=document.createTextNode(quantidadevalue)
  newCell3.appendChild(node3)

  const newCell4=newRow.insertCell()
  const node4=document.createTextNode(precovalue)
  newCell4.appendChild(node4)

  const newCell5=newRow.insertCell()
  const node5=document.createTextNode(total)
  newCell5.appendChild(node5)*/

  const newCell6=newRow.insertCell()
  const node6=document.createElement("img")
  node6.src="https://www.reactiongifs.us/wp-content/uploads/2014/02/banana_despicable_me.gif"
  node6.width=200
  node6.alt="BANANA"
  newCell6.appendChild(node6)

  codigo.value=""
  produto.value=""
  preco.value=""
  quantidade.value=""

}

const createCell=(row,value)=>{
    const newCell=row.insertCell()
    const node=document.createTextNode(value)
    newCell.appendChild(node)
}