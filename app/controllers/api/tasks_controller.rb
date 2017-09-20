class Api::TasksController < ApplicationController
  before_action :set_task, only: [:show, :update, :destroy]

  def index
    render json: Task.all.order(created_at: :desc)
  end

  def show
    render json: @task
  end

  def create
    task = Task.create(task_params)
    if task.save
      render json: task
    else
      render json: { errors: task.errors.full_messages.join(',')}, status: 422
    end
  end

  def update
    if @task.update(task_params)
      render json: @task
    else
      render json: { errors: @task.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @task.destroy
  end

  private
    def set_task
      @task = Task.find(params[:id])
    end

    def task_params
      params.require(:task).permit(:title, :description, :status)
    end
end
