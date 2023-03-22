const dogs = [
    {
        id: 'dog-1',
        name: 'Poodle',
        temperament: [
            'Intelligent',
            'Active',
            'Alert',
            'Faithful',
            'Trainable',
            'Instinctual'
        ],
    },
    {
        id: 'dog-2',
        name: 'Bernese Mountain Dog',
        temperament:['Affectionate', 'Inteligent', 'Loyal', 'Faithful'],
    },
    {
        id:'dog-3',
        name: 'Labrador Retreiver',
        temperament:[
            'Intelligent',
            'Even Tempered',
            'Kind',
            'Agile',
            'Outgoing',
            'Trusting',
            'Gentle',
        ],
    },
    {
        id:'dog-4',
        name: 'Caucasian Shepherd',
        temperament:[
            'Intelligent',
            'Trusting',
            'Gentle',
            'Loyal',
            'Aggressive'
        ],
    },
    {
        id:'dog-5',
        name: 'German Shepherd Dog',
        temperament:[
            'Intelligent',
            'Kind',
            'Agile',
            'Trusting',
            'Gentle',
        ],
    },
]
    console.log(dogs.find(dog=> dog.name === 'Bernes Mountain Dog'));
    console.log(dogs.some(dog => dog.temperament.includes('Aggressive')));
    console.log(dogs.some(dog => dog.temperament.includes('Trusting')));
    console.log(dogs.every(dog => dog.temperament.includes('Trusting')));
    console.log(dogs.every(dog => dog.temperament.includes('Intelligent')));
    console.log(dogs.map(dog => dog.name));

    console.log(dogs.map(dog => dog.id));
    console.log(dogs.find(dog => dog.name === 'German Shepherd Dog'))
    console.log(dogs.filter(dog => dog.temperament.includes('Aggressive')));

    console.log(dogs.filter(dog => dog.temperament.includes('Faithful')));
    console.log(dogs.reduce((allTemperaments, dog) => {
        return [...allTemperaments, ...dog.temperament]
    }, []));