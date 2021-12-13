function areaLargestSquare(r) {  
  //radius is the diagonal from the centre of square to corner
  //r = sqrt(l^2 + l^2) or r = sqrt(2 * l^2)
  //A = (2 * l)^2 or A = 4 * l^2
  //r = sqrt(A/2)
  return 2 * r * r;
}