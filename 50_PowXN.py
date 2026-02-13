class Solution:
    def myPow(self, x: float, n: int) -> float:
        def power(base: float, exponent: int) -> float:
            if exponent == 0:
                return 1.0
            half = power(base, exponent // 2)
            if exponent % 2 == 0:
                return half * half
            else:
                return base * half * half
        if n < 0:
            x = 1 / x
            n = -n
        
        return power(x, n)