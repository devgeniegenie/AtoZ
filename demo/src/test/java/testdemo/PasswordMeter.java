package testdemo;

public class PasswordMeter {
    public PasswordStrength meter(String pw) {
        if (pw == null || pw.isEmpty())
            throw new IllegalArgumentException();

        int count = calculateCount(pw);

        if (count == 0 || count == 1) {
            return PasswordStrength.WEAK;
        }

        if (count == 2) {
            return PasswordStrength.NORMAL;
        }

        return PasswordStrength.STRONG;
    }

    private int calculateCount(String pw) {
        int count = 0;
        if (pw.length() >= 8) count++;
        if (isIncludeUppercase(pw)) count++;
        if (isIncludeDigit(pw)) count++;
        return count;
    }

    private boolean isIncludeUppercase(String pw) {
        for (char c : pw.toCharArray()) {
            if (c >= 'A' && c <= 'Z') {
                return true;
            }
        }
        return false;
    }

    private boolean isIncludeDigit(String pw) {
        for (char c : pw.toCharArray()) {
            if (c >= '0' && c <= '9') {
                return true;
            }
        }
        return false;
    }
}
