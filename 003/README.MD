#Problem 003

The prime factors of 13195 are 5, 7, 13, and 29.

What is the largest factor of the number 600851475143 ?

------

As all the non-prime numbers are composed of multiplication of two primes (numbers are spooky sometmies) they won't be factors. We can probably start looking at this problem by generating primes, and working through the series of primes 1..n for the largest factor.

This isn't a fast way to solve it, there are likely better models I am unaware of. Also, sometimes n may not be factorable at all, which would be nice to guard against as I go into the general solution.
