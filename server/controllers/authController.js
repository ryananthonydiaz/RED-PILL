const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { get, isNil } = require('lodash');

exports.signInUser = async (req, res, next) => {
  const email = get(req, ['body', 'email'], null);
  const password = get('req', ['body', 'password'], null);

  if (isNil(email) || isNil(password)) {
    return res.status(422).send({ error: 'Must provide email and password.' });
  }

  try {
    const user = await User.findOne({ email });

    if (isNil(user)) {
      return res.status(404).send({ error: 'Email not found.' });
    }

    await user.comparePassword(password);

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    res.send({ token });
  } catch (error) {
    res.status(422).send({ error: 'Invalid password or email.' })
  }
}

exports.signUpUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = new User({ email, password });

  try {
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    console.log('back end running');
    res.send({ token });
  } catch (error) {
    res.status(422).send(error)
  }
}