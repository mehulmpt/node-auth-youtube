const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true }
	}, {
	collation: { locale: 'en_US', strength: 1 }
}
)

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model
