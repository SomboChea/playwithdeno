interface IPersonDetail {
    idCard?: string,
    phoneNumber?: number,
}

interface IPerson {
    name?: string,
    age?: number,
    id?: number,
    detail?: IPersonDetail,
}

const person: IPerson = {
    name: "Sambo Chea",
    age: 24,
    id: 1,
    detail: {
        idCard: "234567890",
        phoneNumber: 34567890
    }
}

export const getPerson = ({ response }: { response: any }) => {
    setTimeout(() => {
        console.log("hello world")
    },5000);

    response.body = person
}