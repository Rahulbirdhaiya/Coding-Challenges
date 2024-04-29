function validateLinkedInUrl(url) {
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}$/;
    return regex.test(url);
  }
  
  console.log(validateLinkedInUrl("https://www.linkedin.com/in/john_doe123"));
  console.log(validateLinkedInUrl("https://www.linkedin.com/in/jane-doe_456"));
  console.log(validateLinkedInUrl("https://www.linkedin.com/in/invalid_url"));
  console.log(validateLinkedInUrl("https://www.linkedin.com/in/12345"));
  console.log(validateLinkedInUrl("https://www.linkedin.com/in/jdoe_123456789012345"));