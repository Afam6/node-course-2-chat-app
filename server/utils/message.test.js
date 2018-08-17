const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Daniella';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({
      from,
      text
    });
  });
});

describe('generateLocationMessage', () => {
  it('should generate the correct location object', () => {
    var from = 'Daniella';
    var latitude = 1;
    var longitude = 2;
    var url = `https://www.google.co.uk/maps?q=${latitude},${longitude}`;
    var location = generateLocationMessage(from, latitude, longitude);

    expect(typeof location.createdAt).toBe('number');
    expect(location).toMatchObject({
      from,
      url
    });
  });
});
