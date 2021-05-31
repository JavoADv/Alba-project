const partnerSchema = ({
    name:{
        type: String,
        minLength: 2,
        maxLength: 100,
        requiered: true
    },
    lastName :{
        type: String,
        minLength: 2,
        maxLength: 100,
        required: true
    },
    age:{
        type: Number,
        min: 0,
        max: 100,
        required: true
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, 'Invalid format'],
        minLength: 2,
        maxLength: 150,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 1
    },
    gender: {
        type: String,
        maxLength: 1,
        enum: [
            'masculino',
            'femenino',
            'otro'
        ],
        required: true
    },
    role: {
        type: [String],
        enum: ['admin', 'partner','user'],
        minLength: 1,
        requiered: true
    }

})