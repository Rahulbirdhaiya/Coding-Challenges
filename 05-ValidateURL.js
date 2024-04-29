const validateUrl = (url) => {
    const pattern = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;
    if (pattern.test(url)) {
      console.log(`Input "${url}" matches the conditions.`);
    } else {
      console.log(`Input "${url}" does not match the conditions.`);
    }
  };
  
  // Test the function
  validateUrl('http://example.com'); // Should print: Input "http://example.com" matches the conditions.
  validateUrl('https://sub.domain.org'); // Should print: Input "https://sub.domain.org" matches the conditions.
  validateUrl('ftp://notarealurl'); // Should print: Input "ftp://notarealurl" does not match the conditions.