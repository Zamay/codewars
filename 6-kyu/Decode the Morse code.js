/**
 * Created by Mitya on 06.09.2017.
 */
decodeMorse = function(morseCode){
    return morseCode
        .split('   ')
        .map(val => val.split(' ').map( val => MORSE_CODE[val]).join(''))
        .join(' ')
}