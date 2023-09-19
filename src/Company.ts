import { faker } from '@faker-js/faker';

export class Company {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  content(): string {
    return `
    <div>
      <h2> Company Name: ${this.name} </h2>
      <h3> Catchphrase: ${this.catchPhrase} </h3>
    </div>
    `;
  }
}
