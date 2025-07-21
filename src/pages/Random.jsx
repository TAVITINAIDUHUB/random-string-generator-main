import { useState, useCallback, useEffect } from 'react';

function Random() {
  const [randomString, setRandomString] = useState('');

  const generateString = useCallback(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 10; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setRandomString(result);
  }, []);

  useEffect(() => {
    generateString();
  }, [generateString]);

  return (
    <div className="page center">
      <h2>Random String Generator</h2>
      <p className="random-string">{randomString}</p>
      <button onClick={generateString}>Generate New</button>
    </div>
  );
}

export default Random;
