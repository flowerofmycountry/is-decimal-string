function isDecimalString(value) {
    if (typeof value !== 'string') return false;
    if (isNaN(value)) return false;    
    if (value.trim() === "") return false;
    if (value.startsWith("0.")) return true;
    if (value.startsWith("0")) return false;
    return true;
}

module.exports = isDecimalNumber;