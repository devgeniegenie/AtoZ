package testdemo;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

public class PasswordTest {

    private PasswordMeter passwordMeter = new PasswordMeter();

    @DisplayName("null 입력이면 예외 발생")
    @Test
    void nullInput() {
        Assertions.assertThatIllegalArgumentException()
                .isThrownBy(() -> passwordMeter.meter(null));
    }

    @DisplayName("빈 값이면 예외 발생")
    @Test
    void emptyInput() {
        Assertions.assertThatIllegalArgumentException()
                .isThrownBy(() -> passwordMeter.meter(""));
    }

    private void asswertPasswordStrength(String password, PasswordStrength expected) {
        PasswordStrength result = passwordMeter.meter(password);
        assertThat(result).isEqualTo(expected);
    }

    @DisplayName("모든 조건을 충족하면 강함")
    @Test
    void passAllRules() {
        asswertPasswordStrength("DAsdfgAWSDF123", PasswordStrength.STRONG);
        asswertPasswordStrength("asdfgAWSDF123", PasswordStrength.STRONG);
    }

    @DisplayName("길이가 8미만, 다른 조건은 충족")
    @Test
    void digitAndUppercase() {
        asswertPasswordStrength("asAR123", PasswordStrength.NORMAL);
        asswertPasswordStrength("1aA23", PasswordStrength.NORMAL);
        asswertPasswordStrength("1aBA23", PasswordStrength.NORMAL);
    }

    @DisplayName("대문자 없음, 다른 조건 충족")
    @Test
    void digitAndLength() {
        asswertPasswordStrength("1abba41g23", PasswordStrength.NORMAL);
        asswertPasswordStrength("9sdfh4wg23", PasswordStrength.NORMAL);
    }

    @DisplayName("숫자 없음, 다른조건 충족")
    @Test
    void uppercaseAndLength() {
        asswertPasswordStrength("asdfgAWSDFa", PasswordStrength.NORMAL);
    }

    @DisplayName("길이만 충족")
    @Test
    void length() {
        asswertPasswordStrength("asdfgsdsdfa", PasswordStrength.WEAK);
    }


    @DisplayName("대문자만 충족")
    @Test
    void uppercase() {
        asswertPasswordStrength("asSDFE", PasswordStrength.WEAK);
    }

    @DisplayName("아무것도 충족하지 않음")
    @Test
    void nothing() {
        asswertPasswordStrength("asfa", PasswordStrength.WEAK);
    }
}
