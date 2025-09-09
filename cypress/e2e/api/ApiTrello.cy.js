
describe('Teste API Trello', () => {

    it('Create Board', () => {
        cy.Create_Board()
            .then((response) => {
                cy.log(response.body);
                globalThis.idBoard = response.body.id

            })
    })
    it('Upadte Board', () => {
        const idBoard = globalThis.idBoard
        cy.Update_Board(idBoard)
            .then((response) => {
                cy.log(response)
            })
    });
    it('Get Board', () => {
        const idBoard = globalThis.idBoard
        cy.Get_Board(idBoard)
            .then((response) => {
                cy.log(JSON.stringify(response))
            })
    });
    it('Create List', () => {
        const idBoard = globalThis.idBoard
        cy.Create_List(idBoard)
            .then((response) => {
                cy.log(response.body);
                globalThis.idList = response.body.id

            })
    });
    it('Upadte List', () => {
        const idList = globalThis.idList
        cy.Update_List(idList)
            .then((response) => {
                cy.log(response.body);

            })

    });
    it('Get List', () => {
        const idList = globalThis.idList
        cy.Get_List(idList)
            .then((response) => {
                cy.log(JSON.stringify(response))

            })

    });
    it('Create Card', () => {
        const idList = globalThis.idList
        cy.Create_Card(idList)
            .then((response) => {
                cy.log(response.body);
                globalThis.idCard = response.body.id

            })
    });
    it('Update Card', () => {
        const idCard = globalThis.idCard
        cy.Update_Card(idCard)
            .then((response) => {
                cy.log(response.body);

            })
    });
    it('Get Card', () => {
        const idCard = globalThis.idCard
        cy.Get_Card(idCard)
            .then((response) => {
                cy.log(JSON.stringify(response))

            })

    });
    it('Create Label', () => {
        const idBoard = globalThis.idBoard
        cy.Create_Label(idBoard)
            .then((response) => {
                cy.log(response.body);
                globalThis.idLabel = response.body.id


            })
    });
    it('Update Label', () => {
        const idLabel = globalThis.idLabel
        cy.Update_Label(idLabel)
            .then((response) => {
                cy.log(response.body);

            })
    });
    it('Get Label', () => {
        const idLabel = globalThis.idLabel
        cy.Get_Label(idLabel)
            .then((response) => {
                cy.log(JSON.stringify(response))

            })
    });
    it('Delete Board', () => {
        const idBoard = globalThis.idBoard
        cy.Delete_Board(idBoard)
            .then((response) => {
                cy.log(JSON.stringify(response))
            })
    });


})