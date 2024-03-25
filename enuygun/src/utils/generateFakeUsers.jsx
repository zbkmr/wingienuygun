import {faker} from "@faker-js/faker";

const generateFakeUser = () => {
    return {
        id: faker.string.uuid(),
        fullName: faker.person.fullName(),
        job: faker.person.jobTitle(),
        avatar: faker.image.avatar(),
        rating: faker.number.int({ min: 10, max: 100 }),
        eMail: faker.internet.email(),
        address: faker.location.cardinalDirection()
    }
}

export const generateFakeUsers = (length) => {
    const users = [];

    Array.from({length: length}).forEach(() => {
        users.push(generateFakeUser())
    })
    return users;
}