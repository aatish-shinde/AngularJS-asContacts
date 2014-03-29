package asContacts.repository;

import org.springframework.data.repository.CrudRepository;
import asContacts.model.User;

public interface UserRepository extends CrudRepository<User, Integer> {
    User findByEmail(String email);
}
