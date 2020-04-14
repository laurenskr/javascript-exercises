let findTheOldest = function(people) {
   const oldest = people.sort(function(a,b) {
    if (!b.yearOfDeath){
        b.yearOfDeath = new Date().getFullYear()
    }
    const lastGuy = a.yearOfDeath - a.yearOfBirth;
    const nextGuy = b.yearOfDeath - b.yearOfBirth;
    return lastGuy > nextGuy ? -1 : 1
    // if (lastGuy > nextGuy){
    //     return -1
    // } else {return 1}
   }); return oldest[0]
}
module.exports = findTheOldest
