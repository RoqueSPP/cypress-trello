

Cypress.Commands.add('Create_Board', () => {
  cy.api({

    method: 'POST',
    url: 'https://api.trello.com/1/boards/',
    qs: {
      name: 'Novo Board',
      key: '41378890c278b93dcd4c23f67c02f646',
      token: 'ATTAffd6cd9fb9aa1ed7c9acd0b5c77748de90b08ccb9f7b25536901e62cbdf83a813879A2BB'
    }
  })
    .then((response) => {
      globalThis.boardId = response.body.id
    })
})
Cypress.Commands.add('Update_Board', (boardId) => {
  cy.api({

    method: 'PUT',
    url: `https://api.trello.com/1/boards/${boardId}`,
    qs: {
      name: "Novo Board Atualizado",
      desc: "Teste de Atualização do Board",
      descData: null,
      closed: false,
      key: '41378890c278b93dcd4c23f67c02f646',
      token: 'ATTAffd6cd9fb9aa1ed7c9acd0b5c77748de90b08ccb9f7b25536901e62cbdf83a813879A2BB'
    },
    Headers: {
      Accept: 'application/json'
    }

  })
})
Cypress.Commands.add('Get_Board', (boardId) => {
  cy.api({

    method: 'GET',
    url: `https://api.trello.com/1/boards/${boardId}`,
    qs: {
      key: '41378890c278b93dcd4c23f67c02f646',
      token: 'ATTAffd6cd9fb9aa1ed7c9acd0b5c77748de90b08ccb9f7b25536901e62cbdf83a813879A2BB'
    },
    Headers: {
      Accept: 'application/json'
    }

  })
})
Cypress.Commands.add('Delete_Board', (boardId) => {
  cy.api({

    method: 'DELETE',
    url: `https://api.trello.com/1/boards/${boardId}`,
    qs: {
      key: '41378890c278b93dcd4c23f67c02f646',
      token: 'ATTAffd6cd9fb9aa1ed7c9acd0b5c77748de90b08ccb9f7b25536901e62cbdf83a813879A2BB'
    },
    Headers: {
      Accept: 'application/json'
    }

  })
})
Cypress.Commands.add('Create_List', (boardId) => {
  cy.api({

    method: 'POST',
    url: `https://api.trello.com/1/boards/${boardId}/lists`,
    qs: {
      name: 'Nova List',
      key: '41378890c278b93dcd4c23f67c02f646',
      token: 'ATTAffd6cd9fb9aa1ed7c9acd0b5c77748de90b08ccb9f7b25536901e62cbdf83a813879A2BB'
    },
    Headers: {
      Accept: 'application/json'
    }

  })
})
Cypress.Commands.add('Update_List', (listId) => {
  cy.api({

    method: 'PUT',
    url: `https://api.trello.com/1/lists/${listId}`,
    qs: {
      name: "Novo List Atualizado",
      idBoard: globalThis.idBoard,
      descData: null,
      closed: false,
      key: '41378890c278b93dcd4c23f67c02f646',
      token: 'ATTAffd6cd9fb9aa1ed7c9acd0b5c77748de90b08ccb9f7b25536901e62cbdf83a813879A2BB'
    },
    Headers: {
      Accept: 'application/json'
    }

  })
})
Cypress.Commands.add('Get_List', (listId) => {
  cy.api({

    method: 'GET',
    url: `https://api.trello.com/1/lists/${listId}`,
    qs: {
      key: '41378890c278b93dcd4c23f67c02f646',
      token: 'ATTAffd6cd9fb9aa1ed7c9acd0b5c77748de90b08ccb9f7b25536901e62cbdf83a813879A2BB'
    },
    Headers: {
      Accept: 'application/json'
    }

  })
})
Cypress.Commands.add('Create_Card', (cardid) => {
  cy.api({

    method: 'POST',
    url: `https://api.trello.com/1/cards`,
    qs: {
      idList: `${cardid}`,
      key: '41378890c278b93dcd4c23f67c02f646',
      token: 'ATTAffd6cd9fb9aa1ed7c9acd0b5c77748de90b08ccb9f7b25536901e62cbdf83a813879A2BB'
    },
    Headers: {
      Accept: 'application/json'
    }

  })
})
Cypress.Commands.add('Update_Card', (cardid) => {
  cy.api({

    method: 'PUT',
    url: `https://api.trello.com/1/cards/${cardid}`,
    qs: {
      name: "Novo Card Atualizado",
      key: '41378890c278b93dcd4c23f67c02f646',
      token: 'ATTAffd6cd9fb9aa1ed7c9acd0b5c77748de90b08ccb9f7b25536901e62cbdf83a813879A2BB'
    },
    Headers: {
      Accept: 'application/json'
    }

  })
})
Cypress.Commands.add('Get_Card', (cardId) => {
  cy.api({

    method: 'GET',
    url: `https://api.trello.com/1/cards/${cardId}`,
    qs: {
      key: '41378890c278b93dcd4c23f67c02f646',
      token: 'ATTAffd6cd9fb9aa1ed7c9acd0b5c77748de90b08ccb9f7b25536901e62cbdf83a813879A2BB'
    },
    Headers: {
      Accept: 'application/json'
    }

  })
})
Cypress.Commands.add('Create_Label', (boardId) => {
  cy.api({

    method: 'POST',
    url: `https://api.trello.com/1/labels`,
    qs: {
      name: 'Teste',
      color: 'orange',
      idBoard: `${boardId}`,
      key: '41378890c278b93dcd4c23f67c02f646',
      token: 'ATTAffd6cd9fb9aa1ed7c9acd0b5c77748de90b08ccb9f7b25536901e62cbdf83a813879A2BB'
    },
    Headers: {
      Accept: 'application/json'
    }

  })
})
Cypress.Commands.add('Update_Label', (labelId) => {
  cy.api({
    method: 'PUT',
    url: `https://api.trello.com/1/labels/${labelId}`,
    qs: {
      name: 'Teste Atualizar Label',
      color: 'yellow',
      key: '41378890c278b93dcd4c23f67c02f646',
      token: 'ATTAffd6cd9fb9aa1ed7c9acd0b5c77748de90b08ccb9f7b25536901e62cbdf83a813879A2BB'
    },
    Headers: {
      Accept: 'application/json'
    }

  })
})
Cypress.Commands.add('Get_Label', (LabelId) => {
  cy.api({

    method: 'GET',
    url: `https://api.trello.com/1/labels/${LabelId}`,
    qs: {
      key: '41378890c278b93dcd4c23f67c02f646',
      token: 'ATTAffd6cd9fb9aa1ed7c9acd0b5c77748de90b08ccb9f7b25536901e62cbdf83a813879A2BB'
    },
    Headers: {
      Accept: 'application/json'
    }

  })
})