import Chance from 'chance';

const chance = new Chance();

export const fakeUserData = () => {
    return {
        id: chance.guid(),
        name: chance.name({ middle: true })
    };
};
