package kr.kt1q.bangcash.entities;

import lombok.*;

import javax.persistence.*;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Setter
@Entity
@Table(name = "member")
public class Member {
    @Id
    @GeneratedValue
    @Column(name="member_id") private Long id;
    @Column private String mname;
    @Column private String mphone;
    @Column private String maddress;

}
