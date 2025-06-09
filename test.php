class UserController extends Controller
{
    private $user_repo01;
    private $user_repo02;
    private $user_repo03;

    public function __construct(UserRepositoryInterface $user_repo) {
        $this->user_repo01 = $user_repo->getInstance('db01');
        $this->user_repo02 = $user_repo->getInstance('db02');
        $this->user_repo03 = $user_repo->getInstance('db03');
    }


}

// Interface BaseRepositoryInterface
interface BaseRepositoryInterface
{
    public function getInstance(string $connection = null);
    public function setConnection(string $connection);
    public function getConnectionName();
}

class BaseRepository implements BaseRepositoryInterface
{
    public function __construct(Model $model) {
        $this->model = $model;
    }

    public function getInstance(string $connection) {
        $new_instance = resolve($this::class);
        if($connection) {
            $new_instance->setConnection($connection)
        }

        return $new_instance;

    }

    public function setConnection(string $connection) {
        $this->model->setConnection($connection);

        return $this;
    }

    public function getConnectionName() {
        return $this->model->getConnectionName();
    }
}
