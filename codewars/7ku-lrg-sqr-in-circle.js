function areaLargestSquare(r) {
  //radius is the length of the 45deg line from the centre to edge of the circle
  //legnth are the size of the triangle made by the radius line
  // r = sqrt(l^2 + l^2) => r = sqrt(2 * l^2)
  // A = (2* l)^2 => A = 4 * l^2
  // r = sqrt(A/2)
  //A = r^2
  return 2 * r * r;
}