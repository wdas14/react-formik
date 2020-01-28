export const validateFirstname = value => {
    let error;
    if (!value) {
      error = 'Input ya first name yo!';
    }else if(!/^[a-zA-Z]*$/.test(value)) {
        error = 'Come on, be real';
    }
    return error;
}